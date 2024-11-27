import { Search } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bell } from "lucide-react";
import { User } from "lucide-react";

const NavBar = () => {
  return (
   <header className="bg-white border-b p-4 flex justify-between items-center">
   <div className="flex items-center">
     <Input 
       type="search" 
       placeholder="Rechercher..." 
       className="w-64 mr-4"
       icon={<Search />}
     />
   </div>
   <div className="flex items-center space-x-4">
     <Button variant="ghost" size="icon">
       <Bell className="h-5 w-5" />
     </Button>
     <Avatar>
       <AvatarImage src="/api/placeholder/40/40" />
       <AvatarFallback>
         <User />
       </AvatarFallback>
     </Avatar>
   </div>
 </header>
  )
}

export default NavBar