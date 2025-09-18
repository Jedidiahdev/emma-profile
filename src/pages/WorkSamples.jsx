import React, { useState } from 'react';

const projects = [
  {
    title: 'Onsite Workflow',
    desc: 'Preview of onsite workflows, showing the foundation and planning stages of the building.',
    images: [
      "Emma's Portfolio/Images/IMG-20250914-WA0000.jpg",
      "Emma's Portfolio/Images/IMG-20250914-WA0001.jpg",
      "Emma's Portfolio/Images/IMG-20250914-WA0002.jpg",
      "Emma's Portfolio/Images/IMG-20250914-WA0003.jpg",
      "Emma's Portfolio/Images/IMG-20250914-WA0004.jpg",
      "Emma's Portfolio/Images/VID-20250914-WA0006.mp4",
    ],
    thumb: "Emma's Portfolio/Images/IMG-20250914-WA0000.jpg",
  },
  {
    title: 'Residential Complex',
    desc: 'Designed a sustainable residential complex focusing on energy efficiency and modern aesthetics.',
    images: [
      "Emma's Portfolio/Images/Four Bedroom.jpg",
      "Emma's Portfolio/Images/Four Bedroom (3).jpg",
      "Emma's Portfolio/Images/Four Bedroom (2).jpg",
    ],
    thumb: "Emma's Portfolio/Images/Four Bedroom.jpg",
  },
  {
    title: 'Commercial Hub',
    desc: 'Conceptualized and managed the construction of a commercial hub that combines functionality with striking design.',
    images: [
      "Emma's Portfolio/Images/FIve Bedroom.jpg",
      "Emma's Portfolio/Images/Five Bedroom (3).jpg",
      "Emma's Portfolio/Images/Five bedroom (2).jpg",
    ],
    thumb: "Emma's Portfolio/Images/FIve Bedroom.jpg",
  },
  {
    title: 'Five Bedroom Villa',
    desc: 'Luxury villa project with modern amenities and spacious design for family living.',
    images: [
      "Emma's Portfolio/Images/6 bedroom.jpg",
      "Emma's Portfolio/Images/6 bedroom (3).jpg",
      "Emma's Portfolio/Images/6 bedroom (2).jpg",
    ],
    thumb: "Emma's Portfolio/Images/6 bedroom.jpg",
  },
  {
    title: 'Four Bedroom Home',
    desc: 'Elegant four-bedroom home designed for comfort and style in a suburban setting.',
    images: [
      "Emma's Portfolio/Images/1000122258.jpg",
      "Emma's Portfolio/Images/1000122259.jpg",
    ],
    thumb: "Emma's Portfolio/Images/1000122258.jpg",
  },
  {
    title: 'Modern Office Block',
    desc: 'State-of-the-art office block with open-plan workspaces and eco-friendly features.',
    images: [
      "Emma's Portfolio/Images/1000170101.jpg",
      "Emma's Portfolio/Images/1000170103.jpg",
      "Emma's Portfolio/Images/1000170107.jpg",
    ],
    thumb: "Emma's Portfolio/Images/1000170101.jpg",
  },
];

const WorkSamples = () => {
  const [modal, setModal] = useState({ open: false, projectIdx: 0, imgIdx: 0 });

  const openModal = (projectIdx, imgIdx = 0) => setModal({ open: true, projectIdx, imgIdx });
  const closeModal = () => setModal({ ...modal, open: false });
  const nextImg = () => setModal(m => ({ ...m, imgIdx: (m.imgIdx + 1) % projects[m.projectIdx].images.length }));
  const prevImg = () => setModal(m => ({ ...m, imgIdx: (m.imgIdx - 1 + projects[m.projectIdx].images.length) % projects[m.projectIdx].images.length }));
  const selectImg = idx => setModal(m => ({ ...m, imgIdx: idx }));

  return (
  <div className="container work-samples-page">
  <h2 className="section-title" style={{textAlign: 'center', width: '100%'}}>Featured <span>Projects</span></h2>
      <div className="projects">
        {projects.map((proj, i) => (
          <div className="project" key={proj.title}>
            <button className="img-btn" style={{padding:0,border:'none',background:'none'}} onClick={() => openModal(i)}>
              <img src={proj.thumb} alt={proj.title} className="project-img" />
            </button>
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
          </div>
        ))}
      </div>
      {modal.open && (
        <div className="modal-gallery" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            {projects[modal.projectIdx].images[modal.imgIdx].toLowerCase().endsWith('.mp4') ? (
              <video className="modal-img" controls style={{maxWidth:'100%',maxHeight:'60vh',borderRadius:'12px',background:'#000'}}>
                <source src={projects[modal.projectIdx].images[modal.imgIdx]} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img className="modal-img" src={projects[modal.projectIdx].images[modal.imgIdx]} alt="Gallery" />
            )}
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'18px',margin:'18px 0'}}>
              <button className="modal-prev" onClick={prevImg}>&#8592;</button>
              <span style={{color:'#b0b0b0'}}>{modal.imgIdx+1} / {projects[modal.projectIdx].images.length}</span>
              <button className="modal-next" onClick={nextImg}>&#8594;</button>
            </div>
            <div className="modal-thumbs">
              {projects[modal.projectIdx].images.map((img, idx) => {
                const isVideo = img.toLowerCase().endsWith('.mp4');
                // Use the project's thumb as the video thumbnail, or fallback to a generic image
                const thumbSrc = isVideo ? (projects[modal.projectIdx].thumb || '/video-thumb.png') : img;
                return (
                  <img
                    key={img}
                    src={thumbSrc}
                    alt="thumb"
                    className={"modal-thumb" + (modal.imgIdx === idx ? " active" : "")}
                    onClick={() => selectImg(idx)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkSamples;
