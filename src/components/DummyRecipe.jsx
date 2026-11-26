import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './DummyRecipe.css'

const DummyRecipe = () => {

    const [recipe, setRecipe] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        let mounted = true;
        const fetchRecipes = async () => {
            setLoading(true)
            setError(null)

            try {

                const res = await axios.get('https://dummyjson.com/recipes')
                if (mounted) setRecipe(res.data.recipes)
                console.log(res.data.recipes);

            } catch (error) {
                if (mounted) setError('데이터를 불러오지 못했습니다.')

            } finally {
                if (mounted) setLoading(false)
            }
        }
        fetchRecipes()

        return () => {
            mounted = false
        }
    }, [])

    if (loading)
        return (
            <div className="dummy-wrap">
                <h2 className="dummy-title">DummyJSON Recipes</h2>
                <p className="dummy-state">로딩중...</p>
            </div>
        )

    if (error)
        return (
            <div className="dummy-wrap">
                <h2 className="dummy-title">DummyJSON Recipes</h2>
                <p className="dummy-error">{error}</p>
            </div>
        )

    return (
        <div className="recipes-wrap">
            <h2 className="dummy-title">레시피</h2>
            <ul className='recipe-list'>
                {recipe.map((r) => {

                    return (
                        <li className="recipe-item" key={r.id}>
                            <span className="recipe-id">{r.id}</span>
                            <div className="img-wrap">
                                <img src={r.image} alt={r.name} />

                            </div>
                            <h2>{r.name}</h2>
                            <ol>
                                {r.instructions.map((i) => (
                                    <li key={i}>{i}</li>
                                ))}
                            </ol>
                            {r.tags.map((t) => (
                                <span key={t}>#{t}</span>
                            ))}
                        </li>
                    )
                })}.

                <li>

                </li>
            </ul>
        </div>
    )
}

export default DummyRecipe