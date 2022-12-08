import { useState, useEffect } from 'react';
import { getCategories } from './api';
import { Link } from 'react-router-dom';


export default function Categories () {
    const [categories, setCategories] = useState([])

    useEffect(function () {
        getCategories()
        .then(function (data) {
            const yeildedData = data.data.categories
            setCategories(yeildedData.map(function (category) {
                return category.slug
            }))
        })
    }, [])



return <nav>
    {categories.map(function (category) {
    return <Link to={`/category/${category}`}>{category}</Link>
    })}
</nav>
}
