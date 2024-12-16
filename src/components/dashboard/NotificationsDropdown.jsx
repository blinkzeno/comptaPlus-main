
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, Check, X } from "lucide-react";
import { useState } from "react";

const notifications = [
  {
    id: 1,
    type: 'message',
    title: 'Nouveau message',
    description: 'Jean Dupont vous a envoyé un message',
    time: '5 min',
    read: false
  },
  {
    id: 2,
    type: 'projet',
    title: 'Mise à jour de projet',
    description: 'Un nouveau commentaire a été ajouté',
    time: '2 heures',
    read: false
  },
  {
    id: 3,
    type: 'tache',
    title: 'Tâche terminée',
    description: 'Votre tâche "Rapport mensuel" est validée',
    time: 'Hier',
    read: true
  }
];

const NotificationsDropdown = () => {
  const [notificationList, setNotificationList] = useState(notifications);

  const unreadCount = notificationList.filter(n => !n.read).length;

  const handleMarkAsRead = (id) => {
    setNotificationList(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const handleDismissNotification = (id) => {
    setNotificationList(prev => prev.filter(notif => notif.id !== id));
  };

  const getNotificationIcon = (type) => {
    switch(type) {
      case 'message': return '💬';
      case 'projet': return '📋';
      case 'tache': return '✅';
      default: return '🔔';
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge 
              variant="destructive" 
              className="absolute -top-2 -right-2 px-1.5 py-0.5 text-xs"
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel className="flex justify-between items-center">
          <span>Notifications</span>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setNotificationList(prev => prev.map(n => ({...n, read: true})))}
          >
            Tout marquer comme lu
          </Button>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        {notificationList.length === 0 ? (
          <DropdownMenuItem disabled>
            Pas de nouvelles notifications
          </DropdownMenuItem>
        ) : (
          notificationList.map((notification) => (
            <DropdownMenuItem 
              key={notification.id} 
              className={`flex items-start space-x-3 ${!notification.read ? 'bg-muted/50' : ''}`}
            >
              <span className="text-2xl">{getNotificationIcon(notification.type)}</span>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium">{notification.title}</h4>
                  <span className="text-xs text-muted-foreground">{notification.time}</span>
                </div>
                <p className="text-sm text-muted-foreground">{notification.description}</p>
              </div>
              <div className="flex space-x-1">
                {!notification.read && (
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-6 w-6"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleMarkAsRead(notification.id);
                    }}
                  >
                    <Check className="h-4 w-4" />
                  </Button>
                )}
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-6 w-6"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDismissNotification(notification.id);
                  }}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </DropdownMenuItem>
          ))
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationsDropdown;