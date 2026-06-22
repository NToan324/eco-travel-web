import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { TbLocation } from "react-icons/tb";
import { Mail, Phone, User } from "lucide-react";

export default function ContactDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="flex w-32 h-10">
          Liên hệ
          <TbLocation />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Thông tin liên hệ</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4 py-2">
          <div className="flex items-center gap-3">
            <User className="text-muted-foreground w-5 h-5 shrink-0" />
            <span className="text-sm font-medium">Vũ Hoàng Anh Thy</span>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="text-muted-foreground w-5 h-5 shrink-0" />
            <a
              href="mailto:322h0131@student.tdtu.edu.vn"
              className="text-sm text-primary hover:underline break-all"
            >
              322h0131@student.tdtu.edu.vn
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="text-muted-foreground w-5 h-5 shrink-0" />
            <a
              href="tel:0777805132"
              className="text-sm text-primary hover:underline"
            >
              0777 805 132
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
