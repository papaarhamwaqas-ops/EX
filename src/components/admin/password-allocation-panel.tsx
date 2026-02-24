import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function PasswordAllocationPanel() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Teacher Password Allocation</CardTitle>
                <CardDescription>Generate or assign a password for a teacher account.</CardDescription>
            </CardHeader>
            <CardContent>
                <form className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="teacher-id">Teacher Name / ID</Label>
                        <Input id="teacher-id" placeholder="e.g., Dr. Evelyn Reed" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="new-password">Assign Password</Label>
                        <Input id="new-password" placeholder="Enter a secure password" />
                    </div>
                    <Button type="submit" className="w-full">Generate / Assign Password</Button>
                </form>
            </CardContent>
        </Card>
    );
}
