import React, { useState, useEffect, useRef } from 'react';
import './RoofingLayers.css';

const layersData = [
  { id: 1, name: 'Overglaze' },
  { id: 2, name: 'Stone Granules' },
  { id: 3, name: 'Basecoat' },
  { id: 4, name: 'Acrylic Primer' },
  { id: 5, name: 'Al-Zn Coating' },
  { id: 6, name: 'Steel Core' },
  { id: 7, name: 'Al-Zn Coating' },
  { id: 8, name: 'Acrylic Primer' },
];

const RoofingLayers = () => {
  const [isExploded, setIsExploded] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(null);
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);
  const svgRef = useRef(null);
  const layerRefs = useRef([]);
  const labelRefs = useRef([]);
  const pathRefs = useRef([]);

  // Intersection Observer to trigger explosion on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsExploded(true);
          }
        });
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Update SVG lines based on element positions
  const updateLines = () => {
    if (!wrapperRef.current || !isExploded) return;

    const wrapperRect = wrapperRef.current.getBoundingClientRect();

    layersData.forEach((_, i) => {
      const layer = layerRefs.current[i];
      const label = labelRefs.current[i];
      const path = pathRefs.current[i];

      if (!layer || !label || !path) return;

      const layerRect = layer.getBoundingClientRect();
      const labelRect = label.getBoundingClientRect();

      // Start point: Right side of the layer wavy edge
      const startX = layerRect.left + layerRect.width * 0.9 - wrapperRect.left;
      const startY = layerRect.top + layerRect.height * 0.4 - wrapperRect.top;

      // End point: Left of the label
      const endX = labelRect.left - wrapperRect.left - 15;
      const endY = labelRect.top + labelRect.height / 2 - wrapperRect.top;

      // Create a smooth cubic curve
      const cp1x = startX + (endX - startX) * 0.4;
      const cp2x = startX + (endX - startX) * 0.6;
      const d = `M ${startX} ${startY} C ${cp1x} ${startY}, ${cp2x} ${endY}, ${endX} ${endY}`;

      path.setAttribute('d', d);

      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = '0';
    });
  };

  useEffect(() => {
    if (isExploded) {
      // Small delay to allow CSS transitions to start so we get accurate rects
      const timer = setTimeout(updateLines, 600);
      return () => clearTimeout(timer);
    }
  }, [isExploded]);

  useEffect(() => {
    window.addEventListener('resize', updateLines);
    return () => window.removeEventListener('resize', updateLines);
  }, [isExploded]);

  return (
    <section className="roofing-layers-section" ref={sectionRef} id="roofing-layers">
      <div className="section-container-layers">
        <div className="content-side-layers">
          <h2>SOPHISTICATED STYLE WITH THE STRENGTH OF STONE-COATED STEEL</h2>
          <p>
            Skyban's proprietary stone-coating bonds natural stone granules to high-grade steel,
            delivering breathtaking styles backed by multi-layered strength.
            Engineered for South India's tropical climate since 2006.
          </p>

          <button className="cta-btn-layers" onClick={() => window.location.href = '/skybanroofing/contact'}>
            REQUEST A COMPLIMENTARY SAMPLE
          </button>

          <div className="controls-layers">
            <button className="control-btn-layers" onClick={() => setIsExploded(false)}>Collapse View</button>
            <button className="control-btn-layers" onClick={() => setIsExploded(true)}>Explode View</button>
          </div>
        </div>

        <div className="diagram-side-layers">
          <div className={`explosion-wrapper-layers ${isExploded ? 'is-exploded' : ''}`} ref={wrapperRef}>
            <div className="layers-stack-layers">
              {layersData.map((layer, i) => (
                <div
                  key={layer.id}
                  className={`layer-item layer-id-${layer.id}`}
                  ref={(el) => (layerRefs.current[i] = el)}
                  onMouseEnter={() => setHighlightedIndex(i)}
                  onMouseLeave={() => setHighlightedIndex(null)}
                  style={{ transitionDelay: `${i * 60}ms` }}
                />
              ))}
            </div>

            <svg className="connector-svg-layers" ref={svgRef}>
              {layersData.map((_, i) => (
                <path
                  key={i}
                  className={`connector-line-layers line-${i + 1}`}
                  ref={(el) => (pathRefs.current[i] = el)}
                />
              ))}
            </svg>

            <div className="labels-container-layers">
              {layersData.map((layer, i) => (
                <div
                  key={layer.id}
                  className={`label-item-layer ${highlightedIndex === i ? 'is-highlight' : ''}`}
                  ref={(el) => (labelRefs.current[i] = el)}
                  style={{ transitionDelay: `${500 + i * 100}ms` }}
                >
                  {layer.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoofingLayers;
