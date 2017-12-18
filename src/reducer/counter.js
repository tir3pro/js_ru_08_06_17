/**
 * Created by Yevhen Kryvsun on 12/14/2017.
 */
export default (count = 0, action) => {
    const {type} = action

    switch(type) {
        case 'INCREMENT': return count + 1
    }

    return count
}