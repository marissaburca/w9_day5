import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import { Button} from "react-bootstrap";

const MyFooter = ()=> {
  return (
    <footer className="pb-5 pt-5 mx-0 text-secondary row" data-bs-theme="dark" style={{ backgroundColor : '#221f1f' }}>
      <div className="mx-auto lh-lg col-7">
        <div className="d-flex mb-2">
        <a href="index.html" className="text-secondary">
        <BsFacebook className="fs-4 me-3" />
      </a>
      <a href="index.html" className="text-secondary">
        <BsInstagram className="fs-4 me-3" />
      </a>
      <a href="index.html" className="text-secondary">
        <BsTwitter className="fs-4 me-3" />
      </a>
      <a href="index.html" className="text-secondary">
        <BsYoutube className="fs-4 me-3" />
      </a>
        </div>
        <div className="row mb-3">
          <div className="col-3">
            <p className="mb-0">
              <a href="index.html" className="fs-8 text-secondary text-decoration-none"
                >Audio and Subtitles</a
              >
            </p>
            <p className="mb-0">
              <a href="index.html" className="fs-8 text-secondary text-decoration-none"
                >Media Center</a
              >
            </p>
            <p className="mb-0">
              <a href="index.html" className="fs-8 text-secondary text-decoration-none"
                >Privacy</a
              >
            </p>
            <p className="mb-0">
              <a href="index.html" className="fs-8 text-secondary text-decoration-none"
                >Contact Us</a
              >
            </p>
          </div>
          <div className="col-3">
            <p className="mb-0">
              <a href="index.html" className="fs-8 text-secondary text-decoration-none"
                >Audio Description</a
              >
            </p>
            <p className="mb-0">
              <a href="index.html" className="fs-8 text-secondary text-decoration-none"
                >Investor Relations</a
              >
            </p>
            <p className="mb-0">
              <a href="index.html" className="fs-8 text-secondary text-decoration-none"
                >Legal Notices</a
              >
            </p>
          </div>
          <div className="col-3">
            <p className="mb-0">
              <a href="index.html" className="fs-8 text-secondary text-decoration-none"
                >Help Center</a
              >
            </p>
            <p className="mb-0">
              <a href="index.html" className="fs-8 text-secondary text-decoration-none"
                >Jobs</a
              >
            </p>
            <p className="mb-0">
              <a href="index.html" className="fs-8 text-secondary text-decoration-none"
                >Cokie preferences</a
              >
            </p>
          </div>
          <div className="col-3">
            <p className="mb-0">
              <a href="index.html" className="fs-8 text-secondary text-decoration-none"
                >Gift Cards</a
              >
            </p>
            <p className="mb-0">
              <a href="index.html" className="fs-8 text-secondary text-decoration-none"
                >Term of Use</a
              >
            </p>
            <p className="mb-0">
              <a href="index.html" className="fs-8 text-secondary text-decoration-none"
                >Corporate Information</a
              >
            </p>
          </div>
        </div>
        <Button
          type="button"
          className="btn border border-1 text-secondary fs-5 mb-2 bg-dark"
        >
          Service code
        </Button>
        <p className="fs-6 text-secondary">
          &copy; 1997-2023 Netflix, Inc.
        </p>
      </div>
    </footer>
  )
}

export default MyFooter;
