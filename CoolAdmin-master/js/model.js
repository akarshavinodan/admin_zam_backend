// ---------------------------------------=====area===================================---------------------------

  // Initialize tooltips
  $(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

// Image preview functionality
document.getElementById('image').addEventListener('change', function(e) {
    const file = e.target.files[0];
    const preview = document.getElementById('imagePreview');
    
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
        }
        reader.readAsDataURL(file);
    }
});

// Form submission
function submitForm() {
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').files[0];

    if (!name || !description || !image) {
        alert('Please fill all fields');
        return;
    }

    // Here you can add your API call to save the data
    console.log('Form submitted:', { name, description, image });
    
    // Close modal and reset form
    $('#addAreaModal').modal('hide');
    document.getElementById('areaForm').reset();
    document.getElementById('imagePreview').style.display = 'none';
}

// Reset form when modal is closed
$('#addAreaModal').on('hidden.bs.modal', function () {
    document.getElementById('areaForm').reset();
    document.getElementById('imagePreview').style.display = 'none';
});

// --------------------------------------======testimonials=====================------------------------------------------

  // Initialize tooltips
  $(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

// Image preview functionality
document.getElementById('image').addEventListener('change', function(e) {
    const file = e.target.files[0];
    const preview = document.getElementById('imagePreview');
    
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
        }
        reader.readAsDataURL(file);
    }
});

// Form submission
function submitTestimonialForm() {
    const name = document.getElementById('name').value;
    const place = document.getElementById('place').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').files[0];

    if (!name || !place || !description || !image) {
        alert('Please fill all fields');
        return;
    }

    // Here you can add your API call to save the data
    console.log('Form submitted:', { name, place, description, image });
    
    // Close modal and reset form
    $('#addTestimonialModal').modal('hide');
    document.getElementById('testimonialForm').reset();
    document.getElementById('imagePreview').style.display = 'none';
}

// Reset form when modal is closed
$('#addTestimonialModal').on('hidden.bs.modal', function () {
    document.getElementById('testimonialForm').reset();
    document.getElementById('imagePreview').style.display = 'none';
});