import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebard";
import { toast } from "react-toastify";
import "../interestPoints/AddInterestPoints.css";
import categoriesInfo from "../../components/categoriesInfo";

const EditInterestPointCategories = () => {
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
          `http://127.0.0.1:8000/api/pointcategories/${id}`
        );
        setArticle(response.data);

        // Pré-remplissez le formulaire avec les données existantes
        const fields = [
          "pointCategoryName",
          "id",
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
    const formData = new FormData();
    for (const key in data) {
      if (data[key] instanceof FileList) {
        formData.append(key, data[key][0]); // Ajoutez le fichier au formData
      } else {
        formData.append(key, data[key]); // Ajoutez les autres valeurs au formData
      }
    }
    // Simulez une requête PUT
    formData.append('_method', 'PUT'); 
  
    try {
      await axios.post(`http://127.0.0.1:8000/api/pointcategories/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('L\'article a été modifié avec succès!');
      // Ici, vous pouvez réinitialiser le formulaire ou effectuer d'autres actions post-soumission
    }catch (error) {
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
            <input {...register("pointCategoryName", { required: true })} />
            {errors.pointCategoryName && <span>Ce champ est requis</span>}
          </div>
          <div className="form-group">
            <label>Titre du Point:</label>
            <input {...register("id", { required: true })} />
            {errors.id && <span>Ce champ est requis</span>}
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

export default EditInterestPointCategories;
