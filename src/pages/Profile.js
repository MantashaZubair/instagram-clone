import React, { useState } from 'react'
import "./Profile.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const Profile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showPost, setShowPost] = useState(false);

  const handlePostClose = () => setShowPost(false);
  const handlePostShow = () => setShowPost(true);
  return (
    <div className="container shadow mt-4 p-2  p-md-3">
        <div className='row'>
        <div className='col-md-6 '>
        <img className="p-2 profile-img" src="https://images.unsplash.com/photo-1647891940243-77a6483a152e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="profile-img"/>
        <p className='fs-5 fw-bold'>Mantasha</p>
        <p className=''>Full Stack Developer | UI/UX Deginer </p>
        <p>My Profile <a href='#'>www.google.com</a></p>
        </div>
        <div className='col-md-6 mt-3 d-flex flex-column justify-content-between'>
           <div className='d-flex justify-content-equal '>
             <div className='count-section text-center fw-bold   ps-lg-5 pe-4'>
                <h4>10</h4>
                <p>Posts</p>
             </div>
             <div className='count-section  text-center fw-bold    ps-lg-5 px-4'>
                <h4>10</h4>
                <p>Followers</p>
             </div>
             <div className=' text-center fw-bold  ps-lg-5 ps-4'>
                <h4>10</h4>
                <p>Following</p>
             </div>
           </div>
           
           <div className='mx-auto mt-md-0 mt-4 '>
              <button className="custom-btn custom-btn-white me-2">
                <span className=' fs-6'>Edit Profile</span>
              </button>
              <button className="custom-btn custom-btn-white" onClick={handlePostShow}>
                <span className='fs-6'>Update Profile</span>
              </button>
           </div>
        </div>
        </div>
        <div className='row'>
            <div className='col-12'>
                <hr/>
            </div>
        </div>
        <div className='row'>
            <div className='col-12 col-md-4 '>
            <div className="card mb-2 "  onClick={handleShow}>
              <img src="https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" className="card-img-top" alt="bird"/>
            </div>
            </div>
            <div className='col-12 col-md-4'>
            <div className="card  mb-2">
              <img src="https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="card-img-top" alt="nature"/>
            </div>
            </div> 
            <div className='col-12 col-md-4'>
            <div className="card  mb-2">
              <img src="https://images.unsplash.com/photo-1499002238440-d264edd596ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" className="card-img-top" alt="nature"/>
            </div>
            </div> 
        </div>
        <div className='row mb-4'>
            <div className='col-12 col-md-4'>
            <div className="card  mb-2">
              <img src="https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" className="card-img-top" alt="bird"/>
            </div>
            </div>
            <div className='col-12 col-md-4'>
            <div className="card  mb-2">
              <img src="https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="card-img-top" alt="nature"/>
            </div>
            </div> 
            <div className='col-12 col-md-4'>
            <div className="card  mb-2">
              <img src="https://images.unsplash.com/photo-1499002238440-d264edd596ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" className="card-img-top" alt="nature"/>
            </div>
            </div> 
        </div>
        <div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
       
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='row'>
                <div className='col-md-6'>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" className="d-block w-100" alt="nature"/>
                  </div>
                  <div className="carousel-item">
                    <img src="https://images.unsplash.com/photo-1543877087-ebf71fde2be1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="d-block w-100" alt="nature"/>
                  </div>
                  <div className="carousel-item">
                    <img src="https://images.unsplash.com/photo-1539667468225-eebb663053e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG5hdHVyYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" className="d-block w-100" alt="nature"/>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
                </div>
                </div>
                <div className='col-md-6'>
                   <div className='row mt-md-0 mt-2'>
                   <div className="col-6  d-flex">
                    <img
                      className="profile-pic"
                      src="https://images.unsplash.com/photo-1647891940243-77a6483a152e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                      alt="profile-img"
                    />
                    <div className="ps-2 d-flex flex-column justify-content-center">
                      <p className="fs-6 fw-bold">Title</p>
                      <p className="location">Desription</p>
                    </div>
                  </div>

                  <div className='col-6'>
                  <div className="dropdown">
                    <a className="btn" href="#" role="button"  data-bs-toggle="dropdown">
                    <i className="px-3 fs-4 fa-solid fa-ellipsis"></i>
                    </a>

                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">
                      <i className="fa-regular fa-pen-to-square px-2"></i>
                        Edit User
                      </a></li>
                      <li><a className="dropdown-item" href="#">
                      <i className="fa-solid fa-trash px-2"></i>
                        Delete User
                      </a></li>
                  
                    </ul>
                  </div>
                 </div> 
                </div>
                <div className='row'>
                  <div className='col-12'>
                      <span className='ps-2 text-info'>6 Hour</span>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-12 py-2 mt-4'>
                      <h6>Lorem ipsum  carousel is a slideshow for cycling through a series of </h6>
                  </div>
                </div>
                <div className="row">
                <div className="col-12 d-flex fs-5 ps-3 pt-2">
                  <i className=" fa-regular fa-heart"></i>
                  <i className="px-4 fa-regular fa-comment"></i>
                  <i className=" fw-bold fa-solid fa-location-arrow"></i>
                </div>
               </div>
               <div className='row'>
               <div className="col-12 mt-3">
                <span className="fw-bold">200 Likes</span>
               </div>
               </div>
            </div>
            </div>
        </Modal.Body>
      </Modal>


      {/* uplodebutton */}
      <Modal show={showPost} onHide={handlePostClose} size="lg" centered>
        <Modal.Header closeButton>
        <Modal.Title>
        <span className="fw-bold fs-5">Upload Post</span>
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
              <div className='col-md-6 col-sm-12'>
                  <div className='upload-pic'>

                  </div>
              </div>
              <div className='col-md-6 col-sm-12 d-flex flex-column justify-content-between'>
              <div className='row pe-md-3 '>
              <div className=' col-sm-12'>
              <div className="form-floating mb-2 mt-2">
                <textarea className="form-control" placeholder="" id="floatingTextarea"></textarea>
                <label for ="floatingTextarea">Add Caption</label>
              </div>
              </div>
              <div className=' col-sm-12'>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder=""/>
                <label for="floatingInput"><i className="px-2 fa-solid fa-location-dot"></i>Add Location</label>
              </div>
              </div>
             </div>

             <div className='row'>
              <div className=' col-sm-12'>
              <button className="custom-btn custom-btn-pink float-end">
                <span className='fs-6'>post</span>
              </button>
              </div>
             </div>
              </div>
          </div>


        </Modal.Body>
      </Modal>
      
        </div>
    </div>
  )
}

export default Profile