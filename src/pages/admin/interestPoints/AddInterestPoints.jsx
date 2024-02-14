import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import Sidebar from '../../components/admin/Sidebard';

const AddInterestPoint = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }

    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    try {
      await axios.post('http://127.0.0.1:8000/api/interestpoints', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Point d\'intérêt créé avec succès');
      reset(); // Réinitialiser le formulaire après la soumission réussie
    } catch (error) {
      toast.error('Erreur lors de la création du point d\'intérêt');
      console.error('Erreur de soumission:', error);
    }
  };

  return (
    <div className="admin-container">
      <Sidebar />
      <div className="admin-content">
        <h1>Créer un Point d'Intérêt</h1>
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <div>
            <label>Nom du Point:</label>
            <input {...register("pointName", { required: true })} />
            {errors.pointName && <span>Ce champ est requis</span>}
          </div>
          <div>
            <label>Titre:</label>
            <input {...register("pointTitle", { required: true })} />
            {errors.pointTitle && <span>Ce champ est requis</span>}
          </div>
          <div>
            <label>Slug (optionnel):</label>
            <input {...register("pointSlug")} />
          </div>
          <div>
            <label>Description:</label>
            <textarea {...register("pointDescription", { required: true })} />
            {errors.pointDescription && <span>Ce champ est requis</span>}
          </div>
          <div>
            <label>Vignette:</label>
            <input type="file" {...register("pointThumbnail", { required: true })} alt="Thumbnail" />
            {errors.pointThumbnail && <span>Ce champ est requis</span>}
          </div>
          <div>
            <label>Titre de la Vignette (optionnel):</label>
            <input {...register("pointThumbnailTitle")} />
          </div>
          <div>
            <label>Adresse:</label>
            <input {...register("pointAdress", { required: true })} />
            {errors.pointAdress && <span>Ce champ est requis</span>}
          </div>
          <div>
            <label>Spécialité:</label>
            <input {...register("pointSpeciality", { required: true })} />
            {errors.pointSpeciality && <span>Ce champ est requis</span>}
          </div>
          <div>
            <label>ID Catégorie:</label>
            <input type="number" {...register("pointCategories_id", { required: true })} />
            {errors.pointCategories_id && <span>Ce champ est requis</span>}
          </div>
          <div>
            <button type="submit">Créer</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddInterestPoint;
