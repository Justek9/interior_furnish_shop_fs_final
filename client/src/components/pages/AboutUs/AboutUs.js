import styles from './AboutUs.module.scss';

const AboutUs = () => {
  return (
    <div>
      <div className={styles.root}>
        <h2>About us</h2>
        <h3>
          <b>Welcome to our shop, where utility meets style!</b>
        </h3>
        <p>
          At Interior we believe that every home tells a story, and we're here
          to help you write yours. As a passionate team of interior enthusiasts,
          we understand the transformative power of well-designed and
          thoughtfully curated spaces. Our mission is to bring that
          transformation to your home through our handpicked selection of
          high-quality shelves. With years of experience in the furniture
          industry, weenvisioned an online destination where customers could
          discover a diverse range of shelves to suit various styles and
          spaces. Your satisfaction is our priority. Our customer support team is
          always ready to assist you, ensuring a seamless shopping experience
          from start to finish.
        </p>
        <p>Let's transform your house into a home together! </p>
        <p>
          <b>Happy Shopping!</b>
        </p>
        <div className={styles.img}></div>
      </div>
    </div>
  );
};

export default AboutUs;
