import axios from 'axios'

/*** 获取地址信息(根据经纬度串) */
export const reqAddress = geohash => ajax('/position/${geohash}')

/*** 获取 msite 页面食品分类列表 */
export const reqCategorys = () => ajax('/index_category')

/*** 获取 msite 商铺列表(根据经纬度) */
export const reqShops = ({latitude, longitude}) => ajax('/shops', {latitude, longitude})