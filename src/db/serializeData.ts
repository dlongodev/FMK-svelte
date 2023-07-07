export const serializedData = (res:any) => {
    return res.map((item:[]) => JSON.parse(JSON.stringify(item, (key, value) => key === "_id" ? value.toString(value) : value)))
} 
