import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button";
export function HomePage() {
  const navigate = useNavigate();
  
  return (
    <div>
      <h1>首页</h1>
      <Button onClick={() => navigate('/board')}>
        进入看板
      </Button>
    </div>
  );
}
