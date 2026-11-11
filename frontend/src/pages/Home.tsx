import NavigationSidebar from '../components/NavigationSidebar'

export default function Home() {
  return (
    <div>
      <NavigationSidebar
         defaultExpanded={true}
         activeItem="Home"
       /> 
      <h1>Home</h1>
      <p>Welcome to the Home page!</p>
    </div>
  );
}
