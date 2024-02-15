import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useParams } from "react-router-dom";
import Sidebar from '../../components/admin/Sidebard';
import { useUserContext } from '../../../context/UserProvider';
import './AddInterestPoints.css';
import categoriesInfo from "../../components/categoriesInfo";

const AddInterestPoint = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { user } = useUserContext();
  const [thumbnailPreview, setThumbnailPreview] = useState("");

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
        formData.append(key, data[key][0]);
      } else {
        formData.append(key, data[key]);
      }
    }
    formData.append('user_id', user.id);
    if (data.pointThumbnail.length > 0) {
      formData.append("pointThumbnail", data.pointThumbnail[0]);
    }

    try {
      await axios.post('http://127.0.0.1:8000/api/interestpoints', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Point d\'intérêt créé avec succès');
      reset();
    } catch (error) {
      // Vérification de la présence d'un message d'erreur dans la réponse du back-end
      if (error.response && error.response.data && error.response.data.message) {
        // Si l'erreur contient une structure détaillée (par exemple, des champs spécifiques en erreur)
        if (typeof error.response.data.message === 'object') {
          const messages = Object.values(error.response.data.message).join('. ');
          toast.error(`Erreur : ${messages}`);
        } else {
          // Si l'erreur est une chaîne simple
          toast.error(`Erreur : ${error.response.data.message}`);
        }
      } else {
        // Message d'erreur générique si la réponse du back-end ne contient pas de détail
        toast.error('Une erreur est survenue lors de la création du point d\'intérêt.');
      }
      console.error('Erreur de soumission:', error);
    }

};



  return (
    <div className="admin-container">
      <Sidebar />
      <div className="admin-content">
        <h1>Créer un Point d'Intérêt</h1>
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <div className="form-group">
            <label>Nom du Point/Magasin:</label>
            <input {...register("pointName", { required: true })} />
            {errors.pointName && <span className="error-message">Ce champ est requis</span>}
          </div>
          <div className="form-group">
            <label>Personne en charge:</label>
            <input {...register("pointTitle", { required: true })} />
            {errors.pointTitle && <span className="error-message">Ce champ est requis</span>}
          </div>
          <div className="form-group">
            <label>Astuce:</label>
            <input {...register("pointtips", { required: true })} />
            {errors.pointtips && <span className="error-message">Ce champ est requis</span>}
          </div>
          <div className="form-group">
            <label>Slug (optionnel):</label>
            <input {...register("pointSlug")} />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <textarea {...register("pointDescription", { required: true })} />
            {errors.pointDescription && <span className="error-message">Ce champ est requis</span>}
          </div>
          <div className="form-group">
            <label>Contenu:</label>
            <textarea {...register("pointContent", { required: true })} />
            {errors.pointContent && <span className="error-message">Ce champ est requis</span>}
          </div>
          <div className="form-group">
            <label>Vignette:</label>
            {thumbnailPreview && (
              <img
                src={thumbnailPreview}
                alt="Aperçu de la miniature"
                style={{ width: "100px", height: "100px" }}
              />
            )}
            <input 
              type="file" 
              {...register("pointThumbnail", { required: true })} 
              onChange={handleThumbnailChange} // Utilisez la fonction ici
              alt="Thumbnail" 
            />
            {errors.pointThumbnail && <span className="error-message">Ce champ est requis</span>}
          </div>
          <div className="form-group">
            <label>Titre de la Vignette (optionnel):</label>
            <input {...register("pointThumbnailTitle")} />
          </div>
          <div className="form-group">
            <label>Adresse:</label>
            <input {...register("pointAdress", { required: true })} />
            {errors.pointAdress && <span className="error-message">Ce champ est requis</span>}
          </div>
          <div className="form-group">
            <label>Spécialité:</label>
            <input {...register("pointSpeciality", { required: true })} />
            {errors.pointSpeciality && <span className="error-message">Ce champ est requis</span>}
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
          <div>
            <button type="submit" className="button-5">Créer</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddInterestPoint;
