import React, { useState } from 'react';

const Certifications = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [showUploadModal, setShowUploadModal] = useState(false);

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    const validFiles = files.filter(file => {
      const validTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'];
      return validTypes.includes(file.type) && file.size <= 5 * 1024 * 1024; // 5MB limit
    });

    if (validFiles.length !== files.length) {
      alert('Some files were rejected. Please upload only PDF or image files under 5MB.');
    }

    const newFiles = validFiles.map(file => ({
      name: file.name,
      size: (file.size / 1024).toFixed(2) + ' KB',
      type: file.type,
      url: URL.createObjectURL(file),
      uploadDate: new Date().toLocaleDateString()
    }));

    setUploadedFiles([...uploadedFiles, ...newFiles]);
  };

  const removeFile = (index) => {
    const newFiles = uploadedFiles.filter((_, i) => i !== index);
    setUploadedFiles(newFiles);
  };

  return (
    <section className="certifications" id="certifications">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Certifications & Credentials</h2>
          <p className="section-subtitle">Professional certifications available upon request</p>
        </div>

        <div className="certifications-content">
          <div className="certifications-info">
            <p className="cert-description">
              I maintain various professional certifications and training documents from my 25+ years 
              of experience across different industries. These include technical certifications, 
              business licenses, and professional development courses.
            </p>
            
            <div className="cert-categories">
              <div className="cert-category">
                <i className="fas fa-certificate"></i>
                <span>Technical Certifications</span>
              </div>
              <div className="cert-category">
                <i className="fas fa-id-card"></i>
                <span>Professional Licenses</span>
              </div>
              <div className="cert-category">
                <i className="fas fa-graduation-cap"></i>
                <span>Training Certificates</span>
              </div>
              <div className="cert-category">
                <i className="fas fa-award"></i>
                <span>Service Recognition</span>
              </div>
            </div>
          </div>

          <div className="upload-section">
            <div className="upload-card">
              <h3>For Special Requests</h3>
              <p>If you need to verify specific certifications or credentials for a project, 
                 you can request them here:</p>
              
              <button 
                className="btn btn-primary upload-btn"
                onClick={() => setShowUploadModal(true)}
              >
                <i className="fas fa-cloud-upload-alt"></i>
                Request Certifications
              </button>

              {uploadedFiles.length > 0 && (
                <div className="uploaded-files">
                  <h4>Uploaded Documents ({uploadedFiles.length})</h4>
                  <div className="files-list">
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="file-item">
                        <div className="file-info">
                          <i className={file.type.includes('pdf') ? 'fas fa-file-pdf' : 'fas fa-file-image'}></i>
                          <span className="file-name">{file.name}</span>
                          <span className="file-size">{file.size}</span>
                        </div>
                        <button 
                          className="remove-file"
                          onClick={() => removeFile(index)}
                          aria-label="Remove file"
                        >
                          <i className="fas fa-times"></i>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Upload Modal */}
        {showUploadModal && (
          <div className="modal-overlay" onClick={() => setShowUploadModal(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>Upload Certification Documents</h3>
                <button 
                  className="modal-close"
                  onClick={() => setShowUploadModal(false)}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              
              <div className="modal-body">
                <div className="upload-area">
                  <input
                    type="file"
                    id="cert-upload"
                    className="file-input"
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleFileUpload}
                  />
                  <label htmlFor="cert-upload" className="upload-label">
                    <i className="fas fa-cloud-upload-alt"></i>
                    <span>Click to upload or drag and drop</span>
                    <span className="upload-hint">PDF, JPG, PNG (Max 5MB)</span>
                  </label>
                </div>
                
                <div className="modal-note">
                  <i className="fas fa-info-circle"></i>
                  <p>Your documents will be securely handled and only shared with your explicit permission.</p>
                </div>
              </div>
              
              <div className="modal-footer">
                <button 
                  className="btn btn-secondary"
                  onClick={() => setShowUploadModal(false)}
                >
                  Cancel
                </button>
                <button 
                  className="btn btn-primary"
                  onClick={() => {
                    alert('Certifications uploaded successfully! I will review and respond to your request soon.');
                    setShowUploadModal(false);
                  }}
                  disabled={uploadedFiles.length === 0}
                >
                  Submit Request
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;