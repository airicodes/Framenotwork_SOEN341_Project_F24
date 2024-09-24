
export default function List() {

    const people = [{
        id: 0,
        name: 'Creola Katherine Johnson',
      }, {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
      }]

    const listItems = people.map(person =>
        <li key={person.id} style={{display: "flex", alignItems: "left", paddingLeft: "10px"}} id="student-list">
            <a href="#">{person.id}. <b>{person.name}:</b></a>
        </li>
    );

    return <ol type="1">{listItems}</ol>;
}