import user from '../data/user.json'

const Profile = (props)=> {
    const{username, tag,location, avatar, stats}=props
    return(
        <div class="profile">
  <div class="description">
    <img
      src={user.avatar}
      alt="User avatar"
      class="avatar"
    />
    <p class="name">{user.username}</p>
    <p class="tag">{user.tag}</p>
    <p class="location">{user.location}</p>
  </div>

//tady nevim, jak nahrat tu stats, je potreba jeste neco asi dodat?
  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
</div>

    );
}

export default Profile