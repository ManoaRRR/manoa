import React, { useEffect } from "react";
import docker from "../assets/icons/devicon--docker.png"
import java from "../assets/icons/devicon--java-wordmark.png"
import next from "../assets/icons/akar-icons--nextjs-fill.png"
import tailwind from "../assets/icons/vscode-icons--file-type-tailwind.png"
import github from "../assets/icons/cib--github.png"
import linux from "../assets/icons/logos--linux-tux.png"
import spring from "../assets/icons/devicon--spring.png"
import postgres from "../assets/icons/devicon--postgresql.png"
import typesrcipt from "../assets/icons/logos--typescript-icon.png"
import js from "../assets/icons/skill-icons--javascript.png"
import node from "../assets/icons/logos--nodejs-icon.png"
import aws from "../assets/icons/skill-icons--aws-light.png"
import windows from "../assets/icons/devicon--windows11.png"
import express from "../assets/icons/skill-icons--expressjs-light.png"
import react from "../assets/icons/logos--react.png"
import jetbrains from "../assets/icons/devicon--jetbrains.png"
import bootstrap from "../assets/icons/devicon--bootstrap.png"
import maven from "../assets/icons/devicon--maven.png"
import intellij from "../assets/icons/logos--intellij-idea.png"
import npm from "../assets/icons/devicon--npm-wordmark.png"
import mongodb from "../assets/icons/devicon--mongodb.png"
import axios from "../assets/icons/devicon-plain--axios-wordmark.png"
import html from "../assets/icons/logos--html-5.png"
import css from "../assets/icons/logos--css-3.png"
import gradle from "../assets/icons/devicon--gradle.png"
import vscode from "../assets/icons/vscode-icons--file-type-vscode.png"
import postman from "../assets/icons/logos--postman-icon.png"
import githubaction from "../assets/icons/devicon--githubactions.png"
<script src="https://www.goat1000.com/tagcanvas.min.js"></script>
const Stacks = () => {
  useEffect(() => {
    // Charger le script TagCanvas depuis le CDN
    const script = document.createElement("script");
    script.src = "https://www.goat1000.com/tagcanvas.min.js";
    script.async = true;
    document.body.appendChild(script);

    // Initialiser TagCanvas après le chargement du script
    script.onload = () => {
      if (window.TagCanvas) {
        try {
          window.TagCanvas.Start("tagcanvas", "tags", {
          textHeight: 15,
          textColour: "#ffffff", // Couleur du texte
          outlineColour: "transparent", // Pas de contour
          reverse: true, // Rotation inversée
          depth: 0.6, // Effet de profondeur
          maxSpeed: 0.05, // Vitesse max
          initial: [0.1, -0.1], // Mouvement initial
          wheelZoom: false, // Désactivation du zoom à la molette
          noSelect: true, // Désactivation de la sélection de texte
          noMouse: true, // Empêcher l'arrêt sur hover
          });
        } catch (e) {
          console.error("TagCanvas error:", e);
        }
      }
    };

    // Cleanup script lorsque le composant est démonté
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "90vh", // Prend toute la hauteur de la fenêtre
      backgroundColor: "#1a1b1e", // Couleur de fond de la page
    
    }}>
      {/* Canvas pour le rendu de la sphère */}
      <canvas
        id="tagcanvas"
        width="700"
        height="520"
        style={{ backgroundColor: "tranparent" }}
      ></canvas>

      {/* Liste des éléments qui seront affichés dans la sphère */}
      <div id="tags" style={{ display: "none" }}>
        <ul>
          <li>
            <a  target="_blank" rel="noopener noreferrer">
              <img src={docker} alt="React"/>
            </a>
          </li>
          <li>
            <a  target="_blank" rel="noopener noreferrer">
              <img src={java} alt="JavaScript" />
            </a>
          </li>
          <li>
            <a  target="_blank" rel="noopener noreferrer">
              <img src={next} alt="next.js"  />
            </a>
          </li>
          {/* Ajoutez d'autres icônes ou liens ici */}
          <li>
            <a  target="_blank" rel="noopener noreferrer">
              <img src={github} alt="Node.js" />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer">
              <img src={linux} alt="Node.js" width="50" />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer">
              <img src={spring} alt="Node.js"/>
            </a>
          </li>
          <li>
            <a  target="_blank" rel="noopener noreferrer">
              <img src={tailwind} alt="Node.js"/>
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer">
              <img src={react} alt="Node.js" />
            </a>
          </li>
          <li>
            <a  target="_blank" rel="noopener noreferrer">
              <img src={js} alt="Node.js"  />
            </a>
          </li>
          <li>
            <a  target="_blank" rel="noopener noreferrer">
              <img src={node} alt="Node.js" />
            </a>
          </li>
          <li>
            <a  target="_blank" rel="noopener noreferrer">
              <img src={aws} alt="Node.js" />
            </a>
          </li>
          <li>
            <a  target="_blank" rel="noopener noreferrer">
              <img src={postgres} alt="Node.js" />
            </a>
          </li>
          <li>
            <a  target="_blank" rel="noopener noreferrer">
              <img src={postgres} alt="postgres sql" />
            </a>
          </li>
          <li>
            <a  >
              <img src={express}  />
            </a>
          </li>
          <li>
            <a  >
              <img src={windows} alt="Node.js" />
            </a>
          </li>
          <li>
            <a  >
              <img src={typesrcipt}  />
            </a>
          </li>
          <li>
            <a  target="_blank" rel="noopener noreferrer">
              <img src={postman} alt="postgres sql" />
            </a>
          </li>
          <li>
            <a  target="_blank" rel="noopener noreferrer">
              <img src={maven} alt="postgres sql" />
            </a>
          </li>
          <li>
            <a  target="_blank" rel="noopener noreferrer">
              <img src={vscode} alt="postgres sql" />
            </a>
          </li>
          <li>
            <a  target="_blank" rel="noopener noreferrer">
              <img src={axios} alt="postgres sql" />
            </a>
          </li>
          <li>
            <a  target="_blank" rel="noopener noreferrer">
              <img src={mongodb} alt="postgres sql" />
            </a>
          </li>
          <li>
            <a  target="_blank" rel="noopener noreferrer">
              <img src={html} alt="postgres sql" />
            </a>
          </li>
          <li>
            <a  target="_blank" rel="noopener noreferrer">
              <img src={css} alt="postgres sql" />
            </a>
          </li>
          <li>
            <a  target="_blank" rel="noopener noreferrer">
              <img src={intellij} alt="postgres sql" />
            </a>
          </li>
          <li>
            <a  target="_blank" rel="noopener noreferrer">
              <img src={jetbrains} alt="postgres sql" />
            </a>
          </li>
          <li>
            <a  target="_blank" rel="noopener noreferrer">
              <img src={gradle} alt="postgres sql" />
            </a>
          </li>
          <li>
            <a  target="_blank" rel="noopener noreferrer">
              <img src={bootstrap} alt="postgres sql" />
            </a>
          </li>
          <li>
            <a  target="_blank" rel="noopener noreferrer">
              <img src={npm} alt="postgres sql" />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer">
            <img src ={githubaction} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Stacks;
