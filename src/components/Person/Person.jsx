export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  let partnerInfo = 'I am not married';

  if (isMarried) {
    const partnerRole = sex === 'm' ? 'wife' : 'husband';

    partnerInfo = `Married to my ${partnerRole} ${partnerName}`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{name}</h2>

      {age && <p className="Person__age">Age: {age}</p>}

      <p className="Person__partner">{partnerInfo}</p>
    </section>
  );
};
