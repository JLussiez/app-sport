import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Gallery.css"; // Lien vers ton fichier CSS personnalisé

const galleryPics = [
  {
    id: 1,
    src: "/11.jpg",
    text: "Sensation de vitesse : La poussière s'élève alors que le pilote s'engage sur la spéciale. Chaque virage est un défi, chaque accélération un frisson. Le rallye, c'est l'adrénaline à l'état pur.",
  },
  {
    id: 2,
    src: "/12.jpg",
    text: "Passion pour la mécanique : Sous le capot, la puissance se déchaîne. Les ingénieurs et les mécaniciens travaillent d'arrache-pied pour que chaque détail soit parfait. Dans le rallye, la passion pour la mécanique rencontre l'amour de la vitesse.",
  },
  {
    id: 3,
    src: "/13.jpg",
    text: "L'esprit d'équipe : Un rallye, c'est bien plus qu'une course. C'est un travail d'équipe où chaque membre joue un rôle crucial. Ensemble, ils visent la victoire.",
  },
  {
    id: 4,
    src: "/14.jpg",
    text: "Beauté des paysages : À travers les forêts, les montagnes et les routes sinueuses, le rallye offre des panoramas à couper le souffle. La nature et la vitesse s'unissent pour créer un spectacle inoubliable.",
  },
  {
    id: 5,
    src: "/15.jpg",
    text: "Moments de tension : Les secondes s'écoulent et la pression monte. Chaque décision peut faire la différence entre la victoire et la défaite. Dans le monde du rallye, le suspense est constant.",
  },
  {
    id: 6,
    src: "/11.jpg",
    text: "Sortant du tunnel, la voiture surgit dans un éclat de lumière, ses lignes sculptées trahissant une puissance brute maîtrisée. Le rugissement du moteur résonne encore entre les parois.",
  },
];

const Gallery = () => {
  return (
    <div className="container">
      <div className="row">
        {galleryPics.map((pic) => (
          <div key={pic.id} className="col-md-4 mb-3">
            <div className="position-relative">
              <img
                src={pic.src}
                alt={`gallery picture ${pic.id}`}
                className="img-fluid"
              />
              <div className="overlay d-flex justify-content-center align-items-center">
                <span className="text-white">{pic.text}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
