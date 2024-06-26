const Avatar = ({
  src, 
  width, 
  height
}) => {
  return (
    <div>
      <img
        src={src || 'https://api.dicebear.com/8.x/adventurer/svg?seed=Angel'} 
        alt='avatar' 
        width={width || '40px'} 
        height={height || '40px'} 
      />
    </div>
  )
}

export default Avatar