export default function Column(props) {
  
  const { item } = props;
  console.log(item)
  //template
  return (
    <div>
      <div>
        - &nbsp;
        {item}
        <br></br>
        <br></br>
      </div>
    </div>
  );
};
