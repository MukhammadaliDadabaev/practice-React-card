import Cards from './Cards';

function CardProfile({users}) {
  return users.map((user, index) => {
    return <Cards key={index} user={user} />;
  });
};

export default CardProfile;