export default function getStudentsByLocation(arrarg) {
    return (arrarg.reduce((acc, current) => acc + current.id, 0));
}