import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { setDocument } from "../auth/helper";

function ManuscriptForm() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [documentUrl, setDocumentUrl] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (title.trim() === "") {
      errors.title = "Title is required";
    }
    if (category.trim() === "") {
      errors.category = "Category is required";
    }
    if (documentUrl.trim() === "") {
      errors.url = "URL is required";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }
    // Do something with the form data
    console.log({ title, category, description, documentUrl });
  };

  const postRequestToSetDocument = () => {
    setDocument({ title, category, description, documentUrl })
      .then((data) => {
        if (data.error) {
          // console.log("IN DATA.ERROR");
        } else {
          // console.log("NOT IN DATA.ERROR");
        }
      })
      .catch(console.log("Manuscript upload failed"));
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <Form onSubmit={handleSubmit} style={{marginLeft: 20, marginRight: 20}}>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            isInvalid={!!errors.title}
          />
          <Form.Control.Feedback type="invalid">
            {errors.title}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formCategory" style={{marginTop: 10}}>
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            isInvalid={!!errors.category}
          />
          <Form.Control.Feedback type="invalid">
            {errors.category}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formDescription" style={{marginTop: 10}}>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formUrl" style={{marginTop: 10}}>
          <Form.Label>URL</Form.Label>
          <Form.Control
            type="url"
            value={documentUrl}
            onChange={(event) => setDocumentUrl(event.target.value)}
            isInvalid={!!errors.url}
          />
          <Form.Control.Feedback type="invalid">
            {errors.url}
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit" style={{marginTop: 10}} onClick={postRequestToSetDocument}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ManuscriptForm;
