import {Component, OnInit} from '@angular/core';
import {BlogService} from "../../../../shared/services/blog.service";
import {BlogItem} from "../../../../shared/models/blog-item";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogs: BlogItem[] = [];
  currentPage: number = 1;
  totalElements: number = 0;
  isEmpty: boolean = false;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.getAllBlogs();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.getAllBlogs();
  }

  getAllBlogs(): void {
    this.blogService.getAllBlogs(this.currentPage - 1)
      .subscribe((data) => {
        this.blogs = data.content;
        this.totalElements = data.totalElements;
        this.isEmpty = this.blogs.length === 0;
      });
  }

}
