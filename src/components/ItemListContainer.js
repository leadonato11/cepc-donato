const ItemListContainer = (props) => {
    return (
      <>
        <p>
          {props.greeting}
        </p>
        <p>
          {props.items}
        </p>
      </>
    );
};

export default ItemListContainer;