import React, { useState } from "react";
import "../App.css";
//Bootstrap4.5
import "bootstrap/dist/css/bootstrap.min.css";
//For API Requests
// import axios from "axios";
//Success POPUP
//import Swal from "sweetalert2";

function AddProduct(props) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [photoUrl, setPhotoUrl] = useState();

  //Form Submission
  const addFormData = () => {
    //evt.preventDefault();
    const uploadData = new FormData();
    uploadData.append("title", title);
    uploadData.append("category", category);
    uploadData.append("description", description);
    uploadData.append("photoUrl", photoUrl, photoUrl.name);

    fetch("http://localhost:8000/api/items", {
      method: "POST",
      body: uploadData,
    })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <div className="MainDiv">
      <div class="container main-container">
        <div class="row">
          <div class="col-lg-12">
            <h1 className="text-center mt-5 mb-5">
              Place your product on Collabiz
            </h1>
            <form /*ref={(el) => (this.myFormRef = el)}*/ className="mt-5 mb-5">
              <div className="form-group">
                <input
                  type="text"
                  value={title}
                  onChange={(evt) => setTitle(evt.target.value)}
                  className="form-control"
                  id="productname"
                  placeholder="Enter Product Name"
                  //ref="productname"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={category}
                  onChange={(evt) => setCategory(evt.target.value)}
                  className="form-control"
                  id="category"
                  placeholder="Product category"
                  //ref="productcategory"
                />
              </div>
              <div className="form-group">
                <label for="image">Product Image:</label>
                <input
                  onChange={(e) => this.handleChange(e.target.files)}
                  type="file"
                  onChange={(evt) => setPhotoUrl(evt.target.files[0])}
                  className="form-control"
                  id="image"
                  //ref="productimage"
                />
              </div>
              <div className="form-group">
                <label for="comment">Product Description:</label>
                <textarea
                  class="form-control"
                  value={description}
                  onChange={(evt) => setDescription(evt.target.value)}
                  rows="5"
                  id="productdesc"
                  //ref="productdesc"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={() => addFormData()}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
