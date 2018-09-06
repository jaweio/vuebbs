
//便于存取数据
const ls = localStorage

export default {
  setItem(name, value) {
    //转成字符串 '{}' 
    ls.setItem(name, JSON.stringify(value))
  },
  getItem(name) {
    try {
      //转成数组 { }
      return JSON.parse(ls.getItem(name))
    } catch (e) {
      return null
    }
  },
  removeItem(name) {
    ls.removeItem(name)
  }
}