interface IDetails {
  img: string,
  name: string,
  city: string,
  position: string,
  company:string
}


const Details = ({city, img, name, position, company} : IDetails) => {
  return <>
    <div className="details-block">
        <img className="img-user" src={img} alt="" />
        <h3 className="name">{name}</h3>
        <p className="city">City: {city}</p>
        <p className="company">Company: {company}</p>
        <p className="position">Position: {position}</p>
    </div>
  </>
}

export default Details;