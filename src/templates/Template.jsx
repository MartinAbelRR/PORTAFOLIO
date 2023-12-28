

export const Template = ({children}) => {
  return (
    <section className="bg-custom font-roboto">
        <div className="max-w-screen-xl mx-auto overflow-hidden w-[90%]">
          {children}
        </div>
    </section>
  )
}
