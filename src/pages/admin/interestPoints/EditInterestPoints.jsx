import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebard";
import { toast } from "react-toastify";
import "./AddInterestPoints.css";
import categoriesInfo from "../../components/categoriesInfo";

const EditInterestPoints = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState("");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/interestpoints/${id}`
        );
        setArticle(response.data);

        // Pré-remplissez le formulaire avec les données existantes
        const fields = [
          "pointName",
          "pointTitle",
          "pointSlug",
          "pointDescription",
          "pointAdress",
          "pointSpeciality",
          "pointCategories_id",
          "pointContent",
        ];
        fields.forEach((field) => setValue(field, response.data[field]));
        if (response.data.pointThumbnail) {
          setThumbnailPreview(
            `http://127.0.0.1:8000/storage/${response.data.pointThumbnail}`
          );
        }
      } catch (error) {
        console.error("Erreur lors de la récupération de l'article:", error);
      }
    };

    fetchArticle();
  }, [id, setValue]);

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnailPreview(URL.createObjectURL(file));
    }
  };

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      if (data.pointThumbnail.length > 0) {
        formData.append("pointThumbnail", data.pointThumbnail[0]);
      }

      await axios.post(
        `http://127.0.0.1:8000/api/interestpoints/${id}`,
        formData
      );
      toast.success("L'article a été modifié avec succès!");
    } catch (error) {
      // Vérification de la présence d'un message d'erreur dans la réponse du back-end
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        // Si l'erreur contient une structure détaillée (par exemple, des champs spécifiques en erreur)
        if (typeof error.response.data.message === "object") {
          const messages = Object.values(error.response.data.message).join(
            ". "
          );
          toast.error(`Erreur : ${messages}`);
        } else {
          // Si l'erreur est une chaîne simple
          toast.error(`Erreur : ${error.response.data.message}`);
        }
      } else {
        // Message d'erreur générique si la réponse du back-end ne contient pas de détail
        toast.error(
          "Une erreur est survenue lors de la création du point d'intérêt."
        );
      }
      console.error("Erreur de soumission:", error);
    }
  };

  if (!article) return <div>Chargement...</div>;

  return (
    <div className="admin-container">
      <Sidebar />
      <div className="admin-content">
        <h1>Modifier l'article</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Nom du Point:</label>
            <input {...register("pointName", { required: true })} />
            {errors.pointName && <span>Ce champ est requis</span>}
          </div>
          <div className="form-group">
            <label>Titre du Point:</label>
            <input {...register("pointTitle", { required: true })} />
            {errors.pointTitle && <span>Ce champ est requis</span>}
          </div>
          <div className="form-group">
            <label>Slug du point:</label>
            <input {...register("pointSlug", { required: true })} />
            {errors.pointSlug && <span>Ce champ est requis</span>}
          </div>
          <div className="form-group">
            <label>Miniature actuelle:</label>
            {thumbnailPreview && (
              <img
                src={thumbnailPreview}
                alt="Miniature"
                style={{ width: "100px", height: "100px" }}
              />
            )}
            <input
              type="file"
              {...register("pointThumbnail")}
              onChange={handleThumbnailChange}
            />
            {errors.pointThumbnail && <span>Ce champ est requis</span>}
          </div>
          <div className="form-group">
            <label>Titre du thumbnail:</label>
            <input {...register("pointThumbnailTitle", { required: true })} />
            {errors.pointThumbnailTitle && <span>Ce champ est requis</span>}
          </div>
          <div className="form-group">
            <label>Adresse du point:</label>
            <input {...register("pointAdress", { required: true })} />
            {errors.pointAdress && <span>Ce champ est requis</span>}
          </div>
          <div className="form-group">
            <label>Spécialité du point:</label>
            <input {...register("pointSpeciality", { required: true })} />
            {errors.pointSpeciality && <span>Ce champ est requis</span>}
          </div>
          <div className="form-group">
            <label>Contenu du point:</label>
            <input {...register("pointContent", { required: true })} />
            {errors.pointContent && <span>Ce champ est requis</span>}
          </div>
          <div className="form-group">
            <label>ID Catégorie:</label>
            <select {...register("pointCategories_id", { required: true })}>
              {Object.entries(categoriesInfo).map(([id, { name }]) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </select>
            {errors.pointCategories_id && (
              <span className="error-message">Ce champ est requis</span>
            )}
          </div>
          <button type="submit" className="button-5">
            Sauvegarder les modifications
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditInterestPoints;
