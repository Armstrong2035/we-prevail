import { buttonStyles } from "@/app/styles";
import {
  FormGroup,
  Paper,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
  Select,
  MenuItem,
  Typography,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import React, { useState } from "react";

export default function TheForm() {
  const [contactForm, setContactForm] = useState({
    name: "",
    gender: "",
    email: "",
    phoneNumber: "",
    cityOfResidence: "",
    preferredContact: "",
  });

  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const resetForm = () => {
    setContactForm({
      name: "",
      gender: "",
      email: "",
      phoneNumber: "",
      cityOfResidence: "",
      preferredContact: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!contactForm.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactForm.email)) {
      newErrors.email = "Valid email is required";
    }

    // Phone validation
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!phoneRegex.test(contactForm.phoneNumber)) {
      newErrors.phoneNumber = "Valid phone number is required";
    }

    // City validation
    if (!contactForm.cityOfResidence.trim()) {
      newErrors.cityOfResidence = "City is required";
    }

    // Gender validation
    if (!contactForm.gender) {
      newErrors.gender = "Please select a gender";
    }

    // Preferred contact validation
    if (!contactForm.preferredContact) {
      newErrors.preferredContact = "Please select preferred contact method";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        // Simulating API call - replace with your actual API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Form submitted:", contactForm);

        // Show success message
        setOpenSnackbar(true);

        // Reset form after successful submission
        resetForm();
      } catch (error) {
        console.error("Submission error:", error);
        // You could add error handling here
      }
    }
  };

  return (
    <>
      <Paper elevation={3} sx={{ p: 3, maxWidth: 600, mx: "auto", my: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Contact Information
        </Typography>

        <form onSubmit={handleSubmit}>
          <FormGroup sx={{ gap: 2 }}>
            <TextField
              label="Full Name"
              name="name"
              value={contactForm.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              fullWidth
            />

            <FormControl error={!!errors.gender}>
              <FormLabel>Gender</FormLabel>
              <RadioGroup
                name="gender"
                value={contactForm.gender}
                onChange={handleChange}
                row
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
              {errors.gender && (
                <Typography color="error" variant="caption">
                  {errors.gender}
                </Typography>
              )}
            </FormControl>

            <TextField
              label="Email"
              name="email"
              type="email"
              value={contactForm.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              fullWidth
            />

            <TextField
              label="Phone Number"
              name="phoneNumber"
              value={contactForm.phoneNumber}
              onChange={handleChange}
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber}
              fullWidth
            />

            <TextField
              label="City of Residence"
              name="cityOfResidence"
              value={contactForm.cityOfResidence}
              onChange={handleChange}
              error={!!errors.cityOfResidence}
              helperText={errors.cityOfResidence}
              fullWidth
            />

            <FormControl fullWidth error={!!errors.preferredContact}>
              <FormLabel>Preferred Contact Method</FormLabel>
              <Select
                name="preferredContact"
                value={contactForm.preferredContact}
                onChange={handleChange}
              >
                <MenuItem value="email">Email</MenuItem>
                <MenuItem value="phone">Phone</MenuItem>
                <MenuItem value="both">Both</MenuItem>
              </Select>
              {errors.preferredContact && (
                <Typography color="error" variant="caption">
                  {errors.preferredContact}
                </Typography>
              )}
            </FormControl>

            <Box sx={{ mt: 2 }}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={buttonStyles.primaryButton}
              >
                Submit
              </Button>
            </Box>
          </FormGroup>
        </form>
      </Paper>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Form submitted successfully!
        </Alert>
      </Snackbar>
    </>
  );
}
