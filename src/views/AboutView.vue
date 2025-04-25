<template>
  <div class="about-us">
    <section class="intro">
      <h1>About Us</h1>
      <p>
        Welcome to Our Company! We are a passionate team dedicated to providing the best services to our customers. Our journey began with a simple idea, and over the years, we have grown into a trusted name in the industry. Let us take you through our story and team.
      </p>
    </section>

    <section class="team">
      <h2>Meet Our Team</h2>
      <div class="team-members">
        <div class="team-member">
          <img src="https://via.placeholder.com/150" alt="John Doe" />
          <h3>John Doe</h3>
          <p>CEO & Founder</p>
          <p>John has over 20 years of experience in the industry. He is the visionary behind the company's success and growth.</p>
        </div>
        <div class="team-member">
          <img src="https://via.placeholder.com/150" alt="Jane Smith" />
          <h3>Jane Smith</h3>
          <p>Chief Operating Officer</p>
          <p>Jane oversees daily operations and ensures everything runs smoothly. Her expertise in operations is invaluable to our growth.</p>
        </div>
        <div class="team-member">
          <img src="https://via.placeholder.com/150" alt="Emily Clark" />
          <h3>Emily Clark</h3>
          <p>Marketing Director</p>
          <p>Emily is the creative genius behind our marketing campaigns. She leads our marketing efforts to connect with customers globally.</p>
        </div>
      </div>
    </section>

    <section class="contact">
      <h2>Contact Us</h2>
      <p>If you have any questions or want to learn more about our services, feel free to reach out to us!</p>
      <ul>
        <li>Email: contact@ourcompany.com</li>
        <li>Phone: (123) 456-7890</li>
        <li>Address: 123 Business St, City, Country</li>
      </ul>
    </section>
  </div>
  
</template>

<script setup>
// You can add data, methods, or lifecycle hooks here if needed
</script>

<style scoped>
.about-us {
  font-family: 'Arial', sans-serif;
  color: #333;
  padding: 20px;
}

.intro {
  text-align: center;
  margin-bottom: 40px;
}

.intro h1 {
  font-size: 2.5rem;
  /* color: #007BFF; */
}

.intro p {
  font-size: 1.1rem;
  line-height: 1.6;
}

.team {
  margin-bottom: 40px;
}

.team h2 {
  font-size: 2rem;
  /* color: #007BFF; */
  margin-bottom: 20px;
}

.team-members {
  display: flex;
  justify-content: space-around;
}

.team-member {
  text-align: center;
  width: 30%;
}

.team-member img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.team-member h3 {
  font-size: 1.2rem;
  color: #333;
}

.team-member p {
  font-size: 1rem;
  color: #666;
}

.contact {
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
}

.contact h2 {
  font-size: 2rem;
  /* color: #007BFF; */
  margin-bottom: 10px;
}

.contact ul {
  list-style: none;
  padding: 0;
}

.contact li {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 5px;
}
</style>
