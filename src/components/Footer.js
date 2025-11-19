import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <div className="footer container">
      <div className="footer-section">
        <p className="title">RecipeFlow.com</p>
        <p>
          RecipeFlow is designed to simplify your cooking experience. Search, explore,
          and recreate delicious meals with ease. Whether you’re a beginner or an
          experienced cook, we bring inspiration to your kitchen in just a few clicks.
          Cook smarter, not harder.
        </p>
        <p>&copy;2025 | All Rights Reserved</p>
      </div>

      <div className="footer-section">
        <p className="title">Contact Us</p>
        <p>recipeFlow@gmail.com</p>
        <p>9087654321</p>
        <p>Gandhi Street, Chennai.</p>
      </div>

      <div className="footer-section">
        <p className="title">Socials</p>
        <div className="social-icons">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FacebookIcon fontSize="medium" />
          </a>

          <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
            <XIcon fontSize="medium" />
          </a>

          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon fontSize="medium" />
          </a>
        </div>
      </div>
    </div>
  );
}
