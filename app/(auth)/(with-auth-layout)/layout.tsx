const AuthLayout = ({ children }: {
  children: React.ReactNode;
}) => {
  return(
    <>
      <div>
        Inner Layout
      </div>
      {children}
    </>
  )
}

export default AuthLayout;