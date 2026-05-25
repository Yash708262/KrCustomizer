import React from 'react'
import WhyCustom from '../components/01customProductBuilder/WhyCustom'
import CustomProduct from '../components/01customProductBuilder/CustomProduct'
import WhatIsCustom from '../components/01customProductBuilder/WhatIsCustom'
import HowACustom from '../components/01customProductBuilder/HowACustom'
import WhyShoppers from '../components/01customProductBuilder/WhyShoppers'
import ProductThatWork from '../components/01customProductBuilder/ProductThatWork'
import WhatMakes from '../components/01customProductBuilder/WhatMakes'
import LocationFriendly from '../components/01customProductBuilder/LocationFriendly'
import WhyBrand from '../components/01customProductBuilder/WhyBrands'

const CustomProductBuilder = () => {
  return (
    <div>
        <CustomProduct/>
        <WhyCustom/>
        <WhatIsCustom/>
        <HowACustom/>
        <WhyShoppers/>
        <ProductThatWork/>
        <WhatMakes/>
        <LocationFriendly/>
        {/* <WhyBrand/> */}
    </div>
  )
}

export default CustomProductBuilder
