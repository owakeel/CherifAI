import DashboardLayout from "@/components/layout/deshboardlayout/DashboardLayout";

function DeshboardLayout({ children }) {
     return (
          <div>
               <DashboardLayout>
                    {children}
               </DashboardLayout>
          </div>
     )
}


export default DeshboardLayout;