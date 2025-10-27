import Sitelayout from "@/components/layout/sitelayout/SiteLayout";

function SiteLayout({ children }) {
  return (
    <div>
      <Sitelayout>
        {children}
      </Sitelayout>
    </div>
  )
}


export default SiteLayout;