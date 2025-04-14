interface ContainerProps {
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="mx-auto max-w-8xl px-4 mx-6 2xl:mx-10">{children}</div>
}
export default Container
