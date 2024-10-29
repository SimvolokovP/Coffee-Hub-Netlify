import '../../styles/App.css'

import { useEffect } from 'react'
import useTg from '../../hooks/useTg'

const Product = ({ product, fetchError }) => {


  const {tg} = useTg()
  // const mainButtonParams = {
  //   text: 'VIEW ORDER',
  //   color: 'var(--accent-color)',
	// 	hasShineEffect: true,
  // }

  useEffect(() => {
      tg.MainButton.show()
      // tg.MainButton.setParams(mainButtonParams)
  }, [])

  return <>{fetchError ? fetchError : <div>{product?.id}</div>}</>;
};
export default Product;
