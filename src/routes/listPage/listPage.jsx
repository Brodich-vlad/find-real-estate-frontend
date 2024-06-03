import { listData } from '../../lib/dummydata'
import './listPage.scss'
import Filter from '../../components/filter/Filter';
import Card from '../../components/card/Card';

 function ListPage() {
  const data = listData;
  return <div className='listPage'>
  <div className="listContainer">
    <div className="wrapper">
      <Filter></Filter>
      {data.map(item=>(
        <Card key={item.id} item={item}></Card>
        ))}
    </div>
  </div>
  <div className="mapContainer"></div>
  </div>
}
export default ListPage;