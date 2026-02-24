import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const requests = [
    { id: 'T001', name: 'Dr. Evelyn Reed', subject: 'Biology', date: '2023-10-26', status: 'Pending' },
    { id: 'T002', name: 'Mr. Samuel Chen', subject: 'History', date: '2023-10-25', status: 'Pending' },
    { id: 'T003', name: 'Ms. Anya Sharma', subject: 'Physics', date: '2023-10-25', status: 'Pending' },
    { id: 'T004', name: 'Dr. Ben Carter', subject: 'Chemistry', date: '2023-10-24', status: 'Pending' },
];

export function TeacherRequestsPanel() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Teacher Exam Submissions</CardTitle>
                <CardDescription>Review and approve exams uploaded by teachers.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Teacher</TableHead>
                            <TableHead className="hidden sm:table-cell">Subject</TableHead>
                            <TableHead className="hidden md:table-cell">Date</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {requests.map((request) => (
                            <TableRow key={request.id}>
                                <TableCell>
                                    <div className="font-medium">{request.name}</div>
                                    <div className="text-sm text-muted-foreground md:hidden">{request.subject}</div>
                                </TableCell>
                                <TableCell className="hidden sm:table-cell">{request.subject}</TableCell>
                                <TableCell className="hidden md:table-cell">{request.date}</TableCell>
                                <TableCell className="text-right space-x-2">
                                    <Button variant="outline" size="sm">Reject</Button>
                                    <Button size="sm">Approve</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
