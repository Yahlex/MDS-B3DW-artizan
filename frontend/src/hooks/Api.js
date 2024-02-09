import { useState, useEffect } from 'react';

// Définition d'une fonction fléchée `useFetch` prenant deux arguments : `url` et `options`
const useFetch = (url) => {
    // Déclaration de trois états React avec les hooks `useState`
    const [response, setResponse] = useState(null); // Pour stocker la réponse de la requête
    const [error, setError] = useState(null); // Pour stocker les éventuelles erreurs
    const [isLoading, setIsLoading] = useState(false); // Pour gérer l'état de chargement

    // Utilisation du hook `useEffect` pour effectuer des effets de bord (effets secondaires) dans les composants fonctionnels
    useEffect(() => {
        // Définition d'une fonction asynchrone `fetchData` pour effectuer la requête HTTP
        const fetchData = async () => {
            // Mise à jour de l'état `isLoading` à `true` pour indiquer que la requête est en cours
            setIsLoading(true);
            try {
                // Tentative d'effectuer une requête HTTP à l'URL spécifiée avec les options données
                const res = await fetch(url);
                // Extraction des données JSON de la réponse HTTP
                const json = await res.json();
                // Mise à jour de l'état `response` avec les données récupérées
                setResponse(json.data);
                // Mise à jour de l'état `isLoading` à `false` pour indiquer que la requête est terminée
                setIsLoading(false);
            } catch (error) {
                // En cas d'erreur lors de la requête, mise à jour de l'état `error` avec l'erreur capturée
                setError(error);
            }
        };
        // Appel de la fonction `fetchData` définie ci-dessus
        fetchData();
    // Déclencher l'effet seulement lorsque les dépendances `url` ou `options` changent
    }, [url]);

    // Retourner un objet contenant `response`, `error`, et `isLoading`
    return { response, error, isLoading };
};

// Exportation de la fonction `useFetch` par défaut
export default useFetch; 
