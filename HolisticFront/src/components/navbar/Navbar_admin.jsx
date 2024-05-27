import { useState } from "react";
import "./navbar_admin.css";
import { Link } from "react-router-dom";

function Navbar_admin() {

    const [userType, setUserType] = useState('');
    
  return (
    <section className="navbar_admin">
        <Link to="/admin/manage_users" className="option_admin">
          <img src="/image/icons/icon_users_female.svg" alt="Icon users" className="option_admin--img" />
          <section className="option_admin--text">Gestión usuarios</section>
        </Link>

        <Link to="/admin/manage_videos" className="option_admin">
          <img src="/image/icons/icon_video.svg" alt="Icon videos" className="option_admin--img" />
          <section className="option_admin--text">Gestión vídeos</section>
        </Link>

        <Link to="/admin/manage_faq" className="option_admin">
          <img src="/image/icons/icon_question.svg" alt="Icon videos" className="option_admin--img" />
          <section className="option_admin--text">Gestión preguntas</section>
        </Link>

        <Link to="/admin/manage_recipes" className="option_admin">
          <img src="/image/icons/icon_recipe.svg" alt="Icon recetas" className="option_admin--img" />
          <section className="option_admin--text">Gestión recetas</section>
        </Link>
      </section>

        // <section className="navbar_admin">
        //     <section className="option_admin users">
        //         <img src="/image/icons/icon_users_female.svg" alt="Icon users" className="option_admin--img" />
        //         <section className="option_admin--text">Gestión usuarios</section>
        //     </section>

        //     <section className="option_admin video">
        //         <img src="/image/icons/icon_video.svg" alt="Icon videos" className="option_admin--img" />
        //         <section className="option_admin--text">Gestión vídeos</section>
        //     </section>

        //     <section className="option_admin question">
        //         <img src="/image/icons/icon_question.svg" alt="Icon videos" className="option_admin--img" />
        //         <section className="option_admin--text">Gestión preguntas</section>
        //     </section>

        //     <section className="option_admin recipe">
        //         <img src="/image/icons/icon_recipe.svg" alt="Icon recetas" className="option_admin--img" />
        //         <section className="option_admin--text">Gestión recetas</section>
        //     </section>
        // </section>
        // ) : null
    );
}

export default Navbar_admin;
