import React from 'react';

import { Categories } from '../components/Categories';
import { PizzaBlock } from '../components/PizzaBlock';
import { Sort } from '../components/Sort';
import { Skeleton } from '../components/PizzaBlock/Skeleton';

export const Home = () => {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [categoryId, setCategoryId] = React.useState(0);
    const [sortType, setSortType] = React.useState(0);

    React.useEffect(() => {
        setIsLoading(true);
        fetch(`https://fad2dd5a52c233a6.mokky.dev/items?category=${categoryId}`)
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                setItems(json);
                setIsLoading(false);
            });
    }, [categoryId, sortType]);

    return (
        <>
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={(id) => setCategoryId(id)} />
                <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                    : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
            </div>
        </>
    );
};
