import React, { useState, useEffect } from 'react';
import { Item } from 'semantic-ui-react';
import axios from 'axios';

function Data(props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [addr, setAddr] = useState(props.address);

  if (props.address != addr) {
    setAddr(props.address)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        setData(null);
        setLoading(true);
        const response = await axios.get(
          'https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByAddr/json', {
          params: {
            address: props.address
          }
        }
        );
        setData(response.data.stores); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchData();
  }, [addr]);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!data) return null;
    const dataList =  data.map(dt => {
        return (
            <Item>
                <Item.Content>
                    <Item.Header>
                        {dt.name}
                    </Item.Header>
                    <Item.Meta>
                        {dt.addr}
                    </Item.Meta>
                </Item.Content>
            </Item>
        );
    })

    return (
        <Item.Group divided link>
            {dataList}
        </Item.Group>
    )
   
}

export default Data;
